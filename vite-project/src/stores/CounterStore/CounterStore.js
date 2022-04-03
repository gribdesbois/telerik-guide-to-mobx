import { observable, decorate, computed, action, reaction, autorun } from 'mobx'

class CounterStore {
  @observable counter = 0
  @computed get counterMoreThan100() {
    return this.counter > 100
  }
  @action incrementCounter() {
    return this.counter + 1
  }


 
}

reaction(() => data, (data, reaction) => { sideEffect }, options?)
 const customReactionCounter = reaction(
   ()=> counter.length > 100,
   counter => console.log(`Counter is: ${counter}`)
 )
autorun(() => {
  console.log(`Counter changed to : ${this.counter}`)
})
