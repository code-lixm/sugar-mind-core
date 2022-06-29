// function mix(...mixins) {
//   class Mix {
//     constructor() {
//       for (mixin of mixins) {
//         copyProperties(this, new mixin()) // 拷贝实例属性
//       }
//     }
//   }
//   for (mixin of mixins) {
//     copyProperties(Mix, mixin) // 拷贝静态属性
//     copyProperties(Mix.prototype, mixin.prototype) // 拷贝原型属性
//   }
//   return Mix
// }

// const copyProperties = (target: ClassDecorator, source: ClassDecorator) => {
//   for (key of Reflect.ownKeys(source)) {
//     if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
//       let desc = Object.getOwnPropertyDescriptor(source, key)
//       Object.defineProperty(target, key, desc)
//     }
//   }
// }
