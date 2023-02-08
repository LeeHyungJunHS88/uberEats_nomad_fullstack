import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { createRestaurantDto } from './dto/create-restaurant.dto';
import {
  UpdateRestaurantDto,
  UpdateRestaurantInputType,
} from './dto/update-restaurant.dto';
import { RestaurantService } from './restaurants.service';

@Resolver()
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  // @Query((_) => Boolean)
  // isPizzaGood(): Boolean {
  //   return true;
  // }

  @Query((_) => [Restaurant])
  restaurants(): Promise<Array<Restaurant>> {
    return this.restaurantService.getAll();
  }

  @Mutation((_) => Boolean)
  async createRestaurant(
    @Args('input') createRestaurant: createRestaurantDto,
  ): Promise<boolean> {
    try {
      await this.restaurantService.createRestaurant(createRestaurant);
      return true;
    } catch (e) {
      return false;
    }
  }

  @Mutation((returns) => Boolean)
  async updateRestaurant(
    @Args('input') updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<boolean> {
    try {
      await this.restaurantService.updateRestaurant(updateRestaurantDto);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
