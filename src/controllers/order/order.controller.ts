import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';

@Controller('order')
export class OrderController {
    @Get()
    getOrders() {
        return {
            message: 'Ordenes'
        }
    }

    @Get(':id')
    getOrder(@Param('id') id: number) {
        return {
            message: `order number ${id}`
        }
    }
    @Post()
    create(@Body() payload: any) {
        return {
            message: 'Orden creado',
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
            message: 'Order Deleted'
        }
    }
}
