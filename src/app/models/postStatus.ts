import { Attribute, JsonApiModel, JsonApiModelConfig } from 'angular2-jsonapi';
import { BaseModel } from './baseModel';

@JsonApiModelConfig({
  type: 'post-statuses'
})
export class PostStatus extends BaseModel {
  @Attribute()
  name: string;

  public simpleAttributeNames = [{ name: 'id', required: false }, { name: 'name', required: true }];
  public hasManyAttributes = [];
  public belongsToAttributes = [];
  public manyToManyAttributes = [];
}
