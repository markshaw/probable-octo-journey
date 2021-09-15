import {
  MutationResolvers,
  QueryResolvers,
  Resolvers,
} from 'graphql/__generated__/resolvers-types'

const queryResolvers: QueryResolvers = {
  loans: (parent, args) => {
    return [
      { id: 1, name: 'John', status: 'open', amount: 100 },
      { id: 1, name: 'Jane', status: 'open', amount: 200 },
    ]
  },
}

const mutationResolvers: MutationResolvers = {
  updateLoan: (parent, args) => {
    return { id: 1, name: 'Jane', status: args.newStatus, amount: 200 }
  },
}

const loanResolvers: Resolvers = {
  Query: queryResolvers,
  Mutation: mutationResolvers,
}

const resolvers = [loanResolvers]

export default resolvers
