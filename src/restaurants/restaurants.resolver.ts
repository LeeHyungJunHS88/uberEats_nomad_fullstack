import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { createRestaurantDto } from './dto/create-restaurant.dto';
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
  createRestaurant(@Args() createRestaurant: createRestaurantDto): boolean {
    console.log('arg >>', createRestaurant);
    return true;
  }
}
