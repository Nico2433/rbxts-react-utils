export const isATextInstance = (instance: Instance): instance is TextLabel | TextButton | TextBox => {
	if (instance.IsA("TextLabel") || instance.IsA("TextButton") || instance.IsA("TextBox")) return true;
	return false;
};
