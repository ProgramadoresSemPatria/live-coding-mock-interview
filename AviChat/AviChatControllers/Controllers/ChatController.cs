using AviChatControllers.Database;
using Microsoft.AspNetCore.Mvc;

namespace AviChatControllers.Controllers;

public class ChatController : Controller
{
    // GET: ChatController
    public ActionResult Index(string userToChat)
    {
        return View(model:userToChat);
    }

    public ActionResult<List<string>> GetMessages(int messageId, string userToChat)
    {
        return
            Storage.Users
                .Single(x => x.Name == Storage.CurrentUser)
                .Messages.Where(x => x.From == userToChat && x.Id > messageId)
                .Select(x => x.Content)
                .ToList();
    }
}
