import test from 'ava'
import axios from 'axios'
import { mount } from 'avoriaz'

import Hello from '../src/components/Hello'

test('test', t => {
  t.pass()
})

test('async test', async t => {
  const promise = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
  const data = promise.data
  const expected = {
    'userId': 1,
    'id': 1,
    'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
  }

  t.deepEqual(data, expected)
})

test('test vue component', t => {
  const wrapper = mount(Hello)
  const msg = wrapper.data().msg
  const text = wrapper.find('h1')[0].text()

  t.is(msg, text)
})

