export const isATextInstance = (instance: Instance): instance is TextLabel | TextButton | TextBox => {
	if (instance.IsA("TextLabel") || instance.IsA("TextButton") || instance.IsA("TextBox")) return true;
	return false;
};

export const isAImageInstance = (instance: Instance): instance is ImageLabel | ImageButton => {
	if (instance.IsA("ImageLabel") || instance.IsA("ImageButton")) return true;
	return false;
};
