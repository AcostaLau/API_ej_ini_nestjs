import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    getUsers() {
        return {
            message: 'Usuarios'
        }
    }

    @Get(':id')
    getUser(@Param('id') id: number) {
        return {
            message: `user number ${id}`
        }
    }
    @Post()
    create(@Body() payload: any) {
        return {
            message: 'User creado',
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
            message: 'User Deleted'
        }
    }
}
