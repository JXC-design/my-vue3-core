const hasPermission = (user, permission) => {
    return user.permissions.includes(permission)
}

const hasRole = (user, role) => {
    return user.roles.includes(role)
}

const hasPermissionAndRole = (user, permission, role) => {
    return hasPermission(user, permission) && hasRole(user, role)
}

export {
    hasPermission,
    hasRole,
    hasPermissionAndRole
}
