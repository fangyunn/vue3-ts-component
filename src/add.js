function add(x, y) {
  // 兼容字符串的数字相加
  if (Number(x) == x && Number(y) == y) {
    return Number(x) + Number(y)
  }
  return x + y
}
/**
 * @des 判断传入的值和预期的值是否相等
 * @param {*} ret 
 * @returns 返回一个对象,对象里是一个函数
 */
function expect(ret) {
  return {
    toBe(arg) {
      if (ret !== arg) {
        throw Error(`预期与实际不符,预期是${arg},实际是${ret}`)
      }
    }
  }
}

function test(title, fn) {
  try {
    fn()
    console.log(title, '测试通过');
  } catch (error) {
    console.log(error);
    console.error(title, '测试失败');
  }
}

test('测试数字相加', () => {
  expect(add(1, 2)).toBe(3)
})
test('测试数字和字符串相加', () => {
  expect(add('1', 2)).toBe(3)
})
// 找到对象的目录 执行node add.js 可以查看测试结果