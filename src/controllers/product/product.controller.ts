import {
    Controller,
    Get,
    Param,
    Post,
    Query,
    Body,
    Put,
    Delete,
    ParseIntPipe
} from '@nestjs/common';


import { ProductsService } from '../../services/products/products.service'
import { CreateProductDto, UpdateProductDto } from '../../dtos/products.dto'

@Controller('products')
export class ProductController {

    constructor(private productsService: ProductsService) { }
    @Get()
    getAll(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ) {
        return this.productsService.findAll()
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.findOne(id)
    }

    @Post()
    create(@Body() payload: CreateProductDto) {
        return this.productsService.create(payload)
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateProductDto) {
        return this.productsService.update(id, payload)
    }
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.delete(id)
    }
}
