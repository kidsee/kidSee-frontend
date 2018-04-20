import { JsonApiModelConfig, JsonApiModel, Attribute } from 'angular2-jsonapi';

@JsonApiModelConfig({
  type: 'locations'
})
export class Location extends JsonApiModel {

  @Attribute()
  id: string;

  @Attribute()
  name: string;

  @Attribute()
  lon: number;

  @Attribute()
  lat: number;

  @Attribute()
  description: string;

  @Attribute()
  address: string;
}