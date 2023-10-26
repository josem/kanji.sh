import type { Worksheet } from '@kanji-sh/models';
import fs from 'fs';
import path from 'path';
import Url from 'url';
import { ensureDirectoriesExist, readLinesInFile } from '../utils';
import type { Files } from './Files';

export class LocalFiles implements Files {
    constructor(
        private pdfPath: string,
        private metadataPath: string
    ) {
        ensureDirectoriesExist(pdfPath, metadataPath);
    }

    async getUrl(hash: string): Promise<URL> {
        if (await this.exists(hash)) {
            const fileLocation = path.join(this.pdfPath, `${hash}.pdf`);
            return Url.pathToFileURL(fileLocation);
        } else {
            throw Error(`File ${hash} does not exist.`);
        }
    }

    async readMetaData(hash: string): Promise<Worksheet> {
        const metaFilePath = path.join(this.metadataPath, `${hash}.json`);
        return JSON.parse(readLinesInFile(metaFilePath).join()) as Worksheet;
    }

    async readPDF(hash: string): Promise<Buffer> {
        const fileLocation = path.join(this.pdfPath, `${hash}.pdf`);
        return fs.readFileSync(fileLocation);
    }

    async writePDF(worksheet: Worksheet, pdf: Buffer): Promise<void> {
        const outputPdfFilePath = `${path.join(this.pdfPath, worksheet.hash)}.pdf`;
        fs.writeFileSync(outputPdfFilePath, pdf, { encoding: 'utf-8', flag: 'w+' });

        const outputMetaFilePath = path.join(this.metadataPath, `${worksheet.hash}.json`);
        fs.writeFileSync(outputMetaFilePath, JSON.stringify(worksheet), {
            encoding: 'utf-8',
            flag: 'w+'
        });
    }

    async exists(hash: string): Promise<boolean> {
        const pdfFilePath = path.join(this.pdfPath, `${hash}.pdf`);
        const metaFilePath = path.join(this.metadataPath, `${hash}.json`);
        return fs.existsSync(pdfFilePath) && fs.existsSync(metaFilePath);
    }
}