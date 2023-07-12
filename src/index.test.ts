// src/index.test.ts

import insertCopyright from './index';

describe('vite-insert-copyright', () => {
    it('should insert copyright comment at the top of js files', () => {
        const plugin = insertCopyright();
        const transformed = plugin.transform('console.log("Hello, world!")', 'test.js');
        expect(transformed).toContain('Copyright 2023 - MyCompany');
    });
});
