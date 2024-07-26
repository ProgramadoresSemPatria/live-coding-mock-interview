using AviChatControllers.Models;

namespace AviChatControllers.Database;

public class Storage
{
    internal static string CurrentUser { get; set; } = "Avi";

    internal static List<User> Users { get; set; } 
        = new List<User>() { 
            new User { Name = "Avi"},
            new User { Name = "André"} 
        };
}
