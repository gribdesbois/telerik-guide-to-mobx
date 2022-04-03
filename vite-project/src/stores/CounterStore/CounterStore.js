import { observable, decorate, computed, action } from 'mobx'

class CounterStore {
  @observable counter = 0
  @computed get counterMoreThan100() {
    return this.counter > 100
  }
  @action incrementCounter() {
    return this.counter + 1
  }
}
