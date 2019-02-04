import {
    GraphQLInt, GraphQLString
} from 'graphql';

import models from '../../../models/index.js';
import User from '../../types/user.js';

export default {
    type: User,
    args: {
        id: {
            type: GraphQLString
        }
    },
    resolve(root, args) {
        return models.User.findById(args.id)
    }
}