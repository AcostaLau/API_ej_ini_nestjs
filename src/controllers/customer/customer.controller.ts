import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('customer')
export class CustomerController {

    @Get()
    getCustomers() {
        return {
            message: 'Todos los clientes'
        }
    }

    @Get(':id')
    getCustomer(@Param('id') id: number) {
        return {
            message: `cliente ${id}`
        }
    }
    @Post()
    create(@Body() payload: any) {
        return {
            message: 'Cliente creado',
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
            message: 'Category Deleted'
        }
    }
}
