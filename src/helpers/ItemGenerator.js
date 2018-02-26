import Chance from 'chance'

const chance = new Chance()

export default {
  generateItems: size =>
    Array.from(Array(size), (x, i) => ({
      key: `items-${i}`,
      label: chance.first(),
      href: chance.url(),
      avatar: chance.avatar()
    }))
}