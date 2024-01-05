const currency = [
    {
        USD: '$'
    }
]
const items = [
  {
    id: '2112vasa',
    name: 'hat',
    price: 22.98,
    item_currency: currency[0].USD,
    type: 'Grain',
    received_date: '02/22/2024',
    purchase_date: '01/02/2024',
    expiration: '05/23/2024',
  },
  {
    id: '211',
    name: 'hat',
    price: 22.98,
    item_currency: currency[0].USD,
    type: 'Dairy',
    received_date: '09/22/2024',
    purchase_date: '01/02/2024',
    expiration: '12/23/2029',
  },
  {
    id: '8105',
    name: 'hat',
    price: 22.98,
    item_currency: currency[0].USD,
    type: 'Frozen',
    received_date: '08/12/2024',
    purchase_date: '07/22/2024',
    expiration: '08/23/2024',
  },
]

const customers = [
  {
    id: '312',
    name: 'mavis',
  },
]

const orders = [
  {
    id: '19291',
    ordered_items: [
      {
        item_id: items[0].id,
        item_name: items[0].name,
        item_price: items[0].price,
      },
      {
        item_id: items[1].id,
        item_name: items[1].name,
        item_price: items[1].price,
      },
      {
        item_id: items[2].id,
        item_name: items[2].name,
        item_price: items[2].price,
      },
    ],
    date: '2022-12-05',
    totals: currency[0].USD + '232',
  },
  {
    id: '19212',
    ordered_items: [
      {
        item_id: items[0].id,
        item_name: items[0].name,
        item_price: items[0].price,
      },
      {
        item_id: items[1].id,
        item_name: items[1].name,
        item_price: items[1].price,
      },
      {
        item_id: items[2].id,
        item_name: items[2].name,
        item_price: items[2].price,
      },
    ],
    date: '2022-11-05',
    totals: currency[0].USD + '232',
  },
  {
    id: '18691',
    ordered_items: [
      {
        item_id: items[0].id,
        item_name: items[0].name,
        item_price: items[0].price,
      },
      {
        item_id: items[1].id,
        item_name: items[1].name,
        item_price: items[1].price,
      },
      {
        item_id: items[2].id,
        item_name: items[2].name,
        item_price: items[2].price,
      },
    ],
    date: '2022-02-25',
    totals: currency[0].USD + '232',
  },
]

const revenue = [
  {
    order_id: orders[0].id,
    total: orders[0].totals,
  },
  {
    order_id: orders[1].id,
    total: orders[1].totals,
  },
  {
    order_id: orders[2].id,
    total: orders[2].totals,
  },
]


const production = [
  {
    //pick up
    order_id: orders[0].id,
    customer_name: customers[0].id,
    production_rate: currency[0].USD + (revenue.map( (el) => {
        let i = Number(el.total)
        return i++
    }))
  },
]

//order helper
orders.forEach(order => {
    const total =order.ordered_items.reduce((sum, item) => {
        return sum + item.item_price;
    },0)
    order.totals = currency[0].USD + total
})