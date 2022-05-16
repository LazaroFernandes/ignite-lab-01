import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { AuthorizationGuard } from '../../../http/auth/authorization.guard';
import { CustomersService } from '../../../services/customers.service';
import { ProductsService } from '../../../services/products.service';
import { PurchasesServise } from '../../../services/purchases.service';
import { AuthUser, CurrentUser } from '../../auth/current-user';
import { CreatePurchaseInput } from '../inputs/create-purchase-input';

import { Purchase } from '../models/purchase';

@Resolver(() => Purchase)
export class PurchasesResolver {
  constructor(
    private purchasesService: PurchasesServise,
    private productsService: ProductsService,
    private customersService: CustomersService,
  ) { }

  @Query(() => [Purchase])
  @UseGuards(AuthorizationGuard)
  purchases() {
    return this.purchasesService.listAllPurchases();
  }

  @ResolveField()
  product(
    @Parent() purchase: Purchase,
  ) {
    return this.productsService.getProductById(purchase.productId)
  }
  @Mutation(() => Purchase)
  @UseGuards(AuthorizationGuard)
  async createPurchase(
    @Args('data') data: CreatePurchaseInput,
    @CurrentUser() user: AuthUser,
  ) {
    const customer = await this.customersService.getCustomerByAuthUserId(user.sub);
  
    if(!customer){
      throw new Error('customer not found.')
    }

    return this.purchasesService.createPurchase({
      customerId: customer.id,
      productId: data.productId,
    })
  }
}
