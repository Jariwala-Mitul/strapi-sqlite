'use strict';

/**
 * user-folder service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-folder.user-folder');
