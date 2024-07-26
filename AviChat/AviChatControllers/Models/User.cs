namespace AviChatControllers.Models;

public class User
{
    public List<Message> Messages { get; set; } = new List<Message>(); //This would not be loaded in EF
    public string Name { get; set; }
}

public class Message
{
    public int Id { get; set; }
    public string From { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
}