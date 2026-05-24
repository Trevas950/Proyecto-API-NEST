import { 
    Controller,
    Get,
    Post,
    Put,
    Patch,
    Delete,
    Param,
    Body,
    ParseIntPipe,
    NotFoundException,
    HttpCode,
    HttpStatus,
 } from '@nestjs/common';

 import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
        constructor(private readonly productsService: ProductsService) {}

        @Get()
        findAll() {
            return this.productsService.findAll();
        }

        @Get(':id')
        findOne(@Param('id', ParseIntPipe) id: number) {
            const product = this.productsService.findOne(id);
            if (!product) {
                throw new NotFoundException(`producto con ID ${id} no encontrado`);
            }
            return product
        }

        @Post()
        create(@Body() Body:{name: string; description?: string; price: number; stock: number; inActive?: boolean;}) {
            return this.productsService.create(Body);
        }

        @Put(':id')
        update(
            @Param('id', ParseIntPipe) id: number,
            @Body() body: {name: string; description?: string; price: number; stock: number; insActive?: boolean},
        ) {
            const product = this.productsService.update(id, body);
            if (!product) {
                throw new NotFoundException(`Producto con id ${id} no encontrado`);
            }
            return product;
        }

}