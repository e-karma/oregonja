module.exports = {

  attributes: {
    // todo look up this kind of relationship in waterline

    vendors: {
      model:'vendor'
    },
    tasks: {
      model: 'task',
    },
    //attrs
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    role : {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    phone: {
      type: 'string'
    }
  }
};
