const express = require('express')

// Custom dependencies
const user = require('../controllers/user')
// Creating the router Object
const router = express.Router()

router.route('/').post(user.createOne)
router.get('/:id', user.getOne)
router.get('/:id/edit', user.editOne)

module.exports = router

//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlzQWN0aXZlIjp0cnVlLCJfaWQiOiI2MGY0ODhhYTAzY2NkMDA3ZjEwYzI0MTgiLCJmaXJzdE5hbWUiOiJKaG9uIiwibGFzdE5hbWUiOiJGb2VsbGVyciIsImVtYWlsIjoiZUB0YXNmZGZmZmRnZnNzcmgxMiIsInBpbiI6IiQyYSQxMCRyQy5nWi5JTVc2bWQvVFhMU2ZwSnJPcWVkVWtiVFRYZDFjaldCY2Z1cUpLRm52ZWZvS0R3TyIsInVzZXJuYW1lIjoiZ2YiLCJkYXRlQWRkZWQiOiIyMDIxLTA3LTE4VDIwOjAxOjQ2Ljc3OFoiLCJfX3YiOjB9LCJpYXQiOjE2MjY2NDQ5NzB9.FrCFj2jG2U8y8vPS3a95rpsy8-mpY7R_I09-QN0n36U"