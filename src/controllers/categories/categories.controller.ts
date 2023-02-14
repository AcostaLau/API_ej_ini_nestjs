import { Controller, Get, Param, Query, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
    @Get(':id/products/:taskId')
    getCategory(@Param('taskId') taskId: string, @Param('id') id: string) {
        return {
            message: `tarea ${taskId} and ${id}`
        }
    }
    @Post()
    create(@Body() payload: any) {
        return {
            message: 'Categoria creada',
            payload
        }
    }

    @Put(':id')
    update(@Body() payload: any, @Param('id') id: number) {
        return {
            id,
            payload
        }
    }
    @Delete(':id')
    delete(@Param('id') id: number) {
        return {
            id,
            message: 'Product Deleted'
        }
    }

}
