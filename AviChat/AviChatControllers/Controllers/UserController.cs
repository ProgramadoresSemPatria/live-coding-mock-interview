using AviChatControllers.Database;
using AviChatControllers.Models;
using Microsoft.AspNetCore.Mvc;

namespace AviChatControllers.Controllers;

public class UserController : Controller
{
    // GET: UserController
    public ActionResult Index(string searchTerm = "")
    {
        if (!string.IsNullOrWhiteSpace(searchTerm))
        {
            searchTerm = searchTerm.ToLowerInvariant();
            return View(Storage.Users.Where(x => x.Name.ToLowerInvariant().Contains(searchTerm)).ToList());
        }
        return View(Storage.Users);
    }

    // GET: UserController/Create
    public ActionResult Create()
    {
        return View();
    }

    // POST: UserController/Create
    [HttpPost]
    [ValidateAntiForgeryToken]
    public ActionResult Create(string userName)
    {
        try
        {
            Storage.Users.Add(new User() { Name = userName });
            return RedirectToAction(nameof(Index));
        }
        catch
        {
            return View();
        }
    }
}
