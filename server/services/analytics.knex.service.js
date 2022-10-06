const { knex } = require('../database');
const jsonColumns = (...columns) => (record) => { columns.forEach(column => record[column] = JSON.parse(record[column])); return record; };

async function getPage({ page = 1, pageSize = 10 } = {}) {
    const skip = (page - 1) * pageSize;
    return {
        count: (await knex('analytics').count('* as count').first()).count,
        items: (await knex('analytics').offset(skip).limit(pageSize)).map(jsonColumns('replies'))
    };
}

async function record(message, intent, replies) {
    await knex('analytics').insert({
        message,
        intent: intent?.name ?? null,
        replies: JSON.stringify(replies),
    });
}

module.exports = {
    getPage,
    record,
};
