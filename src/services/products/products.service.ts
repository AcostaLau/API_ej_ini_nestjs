import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from '../../entities/product.entiti'
import { CreateProductDto, UpdateProductDto } from '../../dtos/products.dto'

@Injectable()
export class ProductsService {
    private counterId = 1;
    private products: Product[] = [{
        id: 1,
        name: 'Product 1',
        description: 'lorem lorem',
        price: 250,
        stock: true,
        image: 'bla bla '
    }]

    findAll() {
        return this.products;
    }

    findOne(id: number) {
        const found = this.products.find(product => product.id === id)

        if (!found) {
            throw new NotFoundException(`Product #${id} not found`)
        }
        return found
    }

    create(payload: CreateProductDto) {
        this.counterId = this.counterId + 1

        const newProduct = {
            id: this.counterId,
            ...payload
        }
        this.products.push(newProduct)
        return newProduct
    }

    update(id: number, payload: UpdateProductDto) {
        const prod = this.products.findIndex(product => product.id === id)

        if (prod === -1) {
            console.log(typeof (prod))
            throw new NotFoundException(`Product #${id} not found`)
        }
        console.log(prod)
        const updateProduct = this.products[prod]

        this.products[prod] = {
            ...updateProduct,
            ...payload
        }
        return this.products[prod]
    }
    delete(id: number) {
        const index = this.products.findIndex(product => product.id === id)

        if (index === -1) {
            throw new NotFoundException(`Product #${id} not found`)
        } else {
            this.products.splice(index, 1)
            return {
                message: 'Product deleted'
            }
        }
    }
}
