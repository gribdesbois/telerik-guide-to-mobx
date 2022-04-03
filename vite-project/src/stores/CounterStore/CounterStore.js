import { observable, decorate, computed } from 'mobx'

class CounterStore {
  @observable counter = 0
  @computed get counterMoreThan100() {
    return this.counter > 100
  }
}
