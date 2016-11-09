/**
 * patient
 */
import { BaseModel } from './base-model.model';
import { serializable, serialize } from './serializable.decorator';
import { Person } from './person.model';

export class Patient extends BaseModel {
  private _person: Person;
    constructor(openmrsModel?: any) {
        super(openmrsModel);
    }


  @serializable(true, false)
  public get person(): Person {
    if (this._person === null || this._person === undefined) {
      this.initializeNavigationProperty('person');
      this._person = new Person(this._openmrsModel.person);
    }
    return this._person;
  }
  public set person(v: Person) {
    this._openmrsModel.person = v.openmrsModel;
    this._person = v;
  }

  public toUpdatePayload(): any {
    return null;
  }


}
