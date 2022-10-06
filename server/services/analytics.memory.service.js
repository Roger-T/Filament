const analyticsDatabase = [];

async function getPage({ page = 1, pageSize = 10 } = {}) {
    const start = (page - 1) * pageSize;
    const end = page * pageSize;
    return {
        count: analyticsDatabase.length,
        items: analyticsDatabase.slice(start, end).map(record => ({ ...record, replies: JSON.parse(record.replies) })),
    };
}

async function record(message, intent, replies) {
    analyticsDatabase.push({
        id: analyticsDatabase.length + 1,
        message,
        intent: intent?.name,
        replies: JSON.stringify(replies),
    });
}

module.exports = {
    getPage,
    record,
};
