import { Injectable } from '@nestjs/common';
import { Product } from './product.interface';

@Injectable()
export class ProductsService {
    private products: Product[] = [];
    private nextId = 1;

    findAll(): Product[]{
        return this.products;
    }

    findOne(id: number): Product | undefined {
        return this.products.find((p) => p.id === id);
    }

    create(data: {
        name: string;
        description?: string;
        price: number;
        stock: number;
        isActive?: boolean;
    }): Product {
        const now = new Date();
        const product: Product = {
            id: this.nextId++,
            name: data.name,
            description: data.description,
            price: data.price,
            stock: data.stock,
            isActive: data.isActive ?? true,
            createdAt: now,
            updatedAt: now,
        };
        this.products.push(product);
        return product;
    }
}

