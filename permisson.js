const hasPermission = (user, permission) => {
    return user.permissions.includes(permission)
}

export {
    hasPermission
}