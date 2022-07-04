
L | -----*------------- | R

class Component {
  foo = 10;

  constructor(data) {

    const foo = this.render();
    const bar = this.getSubElement(foo);
    const baz = this.addEventListeners(bar);

    console.log(this.foo); // 4
  }

  render () {
    // logic

    this.foo = this.foo * 2;

    // logic
  }

  getSubElement () {
    // logic

    this.foo = this.foo * 20;

    // logic
  }

  addEventListeners () {
    // logic

    this.foo = this.foo / 100;

    // logic
  }
}


class Componet {
  constructor(data) {
    this.data = data;
    this.render();
    this.update();
  }

  _render () {
    // logic
    // this.buildBody();
  }

  update() {
    this.data = data;

    this.render();
  }
}

const obj = new Component();

export default obj;

