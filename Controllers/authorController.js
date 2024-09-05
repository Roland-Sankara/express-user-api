import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const deleteAuthor = async(req,res)=>{
    const data = await prisma.author.delete({
        where:{
            id: +req.params.id
        }
    })

    res.json(data)
}

export default deleteAuthor;