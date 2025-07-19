// src/index.ts
/**
 * Main entry point for ContentmanagementsystemsLabs
 */

import { ContentmanagementsystemsLabs } from './contentmanagementsystemslabs';
import minimist from 'minimist';

interface Args {
    verbose?: boolean;
    input?: string;
    output?: string;
}

const args: Args = minimist(process.argv.slice(2), {
    boolean: ['verbose'],
    alias: {
        v: 'verbose',
        i: 'input',
        o: 'output'
    }
});

const app = new ContentmanagementsystemsLabs({
    verbose: args.verbose
});

app.execute()
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
