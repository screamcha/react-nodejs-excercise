
exports.seed = async (knex) => {
  await knex('items').del()

  return knex('items').insert([
    {
      id: 1,
      name: 'Apple iPhone 11 Red',
      description: 'The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system (OS), and as of 2017, there were 2.2 million apps available for it through the Apple App Store, according to Statista. Former Apple CEO Steve Jobs introduced the iPhone to the public on January 9, 2007, at the Macworld 2007 conference in San Francisco. It went on sale June 29 of that year.',
      price: 899
    },
    {
      id: 2,
      name: 'Apple iPhone 11 Black',
      description: 'The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system (OS), and as of 2017, there were 2.2 million apps available for it through the Apple App Store, according to Statista. Former Apple CEO Steve Jobs introduced the iPhone to the public on January 9, 2007, at the Macworld 2007 conference in San Francisco. It went on sale June 29 of that year.',
      price: 759.90
    },
    {
      id: 3,
      name: 'Apple iPhone 11 Pro Green',
      description: 'The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system (OS), and as of 2017, there were 2.2 million apps available for it through the Apple App Store, according to Statista. Former Apple CEO Steve Jobs introduced the iPhone to the public on January 9, 2007, at the Macworld 2007 conference in San Francisco. It went on sale June 29 of that year.',
      price: 779
    },
    {
      id: 4,
      name: 'Apple iPhone SE 2',
      description: 'The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system (OS), and as of 2017, there were 2.2 million apps available for it through the Apple App Store, according to Statista. Former Apple CEO Steve Jobs introduced the iPhone to the public on January 9, 2007, at the Macworld 2007 conference in San Francisco. It went on sale June 29 of that year.',
      price: 649.99
    }
  ])
}
