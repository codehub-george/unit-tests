export interface Product {
    title: string;
    description?: string;
    quantity?: number;
    atributes: Atributes[];
}

export interface Atributes {
    type: string;
    name: string;
}

export function wordTrimmer(word: string): string {
    return word.trim();
}

export function cutString(word: string, cutPosition: number): string {
    if (cutPosition > word.length) {
        return word;
    }
    if (cutPosition < 0) {
        return word;
    }
    return word.substring(0, cutPosition);
}

export function attributeNameMapper(product: Product): string[] {
    if (!product) {
        return null;
    }
    return product.atributes.map(attribute => attribute.name);
}

export function isPrime(numb: number): boolean {
    if (numb <= 1) {
        return false;
    }

    // The check for the number 2 and 3
    if (numb <= 3) {
        return true;
    }

    if (numb % 2 === 0 || numb % 3 === 0) {
        return false;
    }

    for (let i = 5; i * i <= numb; i = i + 6) {
        if (numb % i === 0 || numb % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}
