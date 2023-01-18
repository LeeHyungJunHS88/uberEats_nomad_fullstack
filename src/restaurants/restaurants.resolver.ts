import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { createRestaurantDto } from './dto/create-restaurant.dto';

@Resolver()
export class RestaurantResolver {
  // @Query((_) => Boolean)
  // isPizzaGood(): Boolean {
  //   return true;
  // }

  @Query((_) => [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: boolean): Array<Restaurant> {
    return [];
  }

  @Mutation((_) => Boolean)
  createRestaurant(@Args() createRestaurant: createRestaurantDto): boolean {
    console.log('arg >>', createRestaurant);
    return true;
  }
}
