import express from 'express';
import {
    createUser,
    getAllUsers,
    cashDeposit,
    creditDeposit,
    cashWithdraw,
    cashTransfer,
    getUserById,
    getUsersByTotalMoney,
    getUserByStatus,
    deleteUser
} from '../controllers/usersController.js'

const router1 = express.Router();

// Users Routes
router1.route('/')
    .get(getAllUsers)  
    .post(createUser);

    router1.route('/user/:id')
    .get(getUserById)  
    .delete(deleteUser); 

    router1.route('/user/:id/transactions')
    .patch(cashDeposit) 
    .patch(creditDeposit) 
    .patch(cashWithdraw) 

    router1.patch('/user/:id/transfer', cashTransfer); 

    router1.get('/users/:totalMoney', getUsersByTotalMoney); 
    router1.get('/status/:isactive', getUserByStatus); 

export default router1;
