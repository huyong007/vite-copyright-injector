// src/index.ts

// 确定要添加的版权信息
const copyright = `
/*
* Copyright 2023 - MyCompany
* All rights reserved
*/
`;

// 创建Vite插件
export default function insertCopyright() {
    return {
        name: 'vite-insert-copyright',
        transform(code: string, id: string) {
            // 如果文件是一个JS文件，则在文件顶部添加版权信息
            if (id.endsWith('.js')) {
                return copyright + code;
            }
        },
    }
}
