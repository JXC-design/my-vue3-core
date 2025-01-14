const hasPermission = (user, permission) => {
    return user.permissions.includes(permission)
}

const hasRole = (user, role) => {
    return user.roles.includes(role)
}

export {
    hasPermission,
    hasRole
}