import express from 'express';
import deleteAuthor from '../Controllers/authorController.js';

const router = express.Router();

router.delete('/:id',deleteAuthor);

export default router