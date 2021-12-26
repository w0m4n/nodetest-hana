# API Code Test

## Introduction

Welcome to our bakery shop `Piece of Cake`, one of our latest innovations for helping lovers of baked goods find their favourite treats.

Our bakery used to base the price of their produce on an individual item cost. If a customer ordered 10 hot cross buns then they would be charged 10x the cost of a single bun.

Our bakery has decided to start selling their produce prepackaged and charging the customer on a per pack basis. If the shop sold vegemite scroll in packs of 3 and 5 and a customer ordered 8 they would now get a pack of 3 and a pack of 5.

## Instructions

We would like you to work on this coding test for us to see how you would approach building a feature. We think you should spend about 3-4 hours on the code test, we consider it a starting point to extend and modify in our technical interview with you.

## User Story to Implement

As a customer of the bakery I would like to order packs of baked goods.

## More Information

Every product in our bakery has the following properties:

- **Name** - a string (e.g. `"Vegemite Scroll"`);
- **Code** - a string (e.g. `"VS"`);
- **Packaging Options** - an array of objects. Each of them has the following properties:
  - **count** - a number;
  - **price** - the price in cents (a number);

The following is a sample representation of a product as JSON:

```
{
    "name": "Vegemite Scroll",
    "code": "VS",
    "packagingOptions": [
        { count: 3, price: 699 },
        { count: 5, price: 899 },
    ]
}
```

For the purposes of the assignment you can store the product data in memory instead of a database.

A customer order consists of pairs of product codes and counts. For example, a customer may order 2 items with code `VS` and 3 items with code `BM`.

Develop a new API endpoint which accepts a customer order as a payload.

The API should determine the cost and packaging breakdown for each requested product and return it in the response. **To save on space each order should contain the minimal number of packs.**

We leave the formats of the payload, the response, HTTP method, etc. to your discretion and you should document them in the README.

### Example of Order Packaging

Let's assume we have the following products in the bakery:

| Name             | Code | Packaging Options |
| ---------------- | :--: | ----------------: |
| Vegemite Scroll  |  VS  |       3 for $6.99 |
|                  |      |       5 for $8.99 |
| Blueberry Muffin |  BM  |       2 for $9.95 |
|                  |      |      5 for $16.95 |
|                  |      |      8 for $24.95 |
| Croissant        |  CR  |       3 for $5.95 |
|                  |      |       5 for $9.95 |
|                  |      |      9 for $16.99 |

Given an order for _10 VS_, _14 BM_, and _13 CR_, the correct breakdown is:

- **10 VS for $17.98**
  - 2 pack of 5 items ($8.99 ea.)
- **14 BM for $54.80**
  - 1 pack of 8 items ($24.95 ea.)
  - 3 packs of 2 items ($9.95 ea.)
- **13 CR for $25.85**
  - 2 packs of 5 items ($9.95 ea.)
  - 1 pack of 3 items ($5.95 ea.)

We value writing well tested code at SRC and would like to see tests around any code you write.

## Deliverables

- Source code
- Sample product catalogue
- Commit history
- Instructions to run your API, tests, etc.
- A readme file with comments about your approach and trade-offs you possibly made

Feel free to send through any questions you may have.
