import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';


@Controller('brand')
export class BrandController {
    @Get()
    getBrands() {
        return {
            message: 'Marca'
        }
    }

    @Get(':nameOfBrand')
    getBrand(@Param('nameOfBrand') nameOfBrand: string) {
        return {
            message: nameOfBrand
        }
    }

    @Get(':products/brand/:typeOfBrand')
    getProductBrand(@Param("products") prodcuts: string, @Param("typeOfBrand") typeOfBrand: string) {
        return {
            message: `producto ${prodcuts} de la marca ${typeOfBrand}`
        }
    }

    @Post()
    create(@Body() payload: any) {
        return {
            message: 'Marca creada',
            payload
        }
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: any) {
        return {
            id,
            payload
        }
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return {
            id,
            message: 'Brand delete'
        }
    }
}
