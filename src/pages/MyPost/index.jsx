import React from "react";

function MyPost() {
  return (
    <div>
      <div class="grid gap-6 px-5 mx-auto max-w-7xl my-20 min-h-[60vh]">
        <div class="overflow-auto">
          <h2 class="hero-title text-3xl sm:text-5xl font-semibold sm:leading-[4rem] text-primary text-center mt-10 mb-8">
            ✍️ My Post
          </h2>
          <div
            data-slot="table-container"
            class="relative w-full overflow-x-auto"
          >
            <table data-slot="table" class="w-full caption-bottom text-sm">
              <thead data-slot="table-header" class="[&amp;_tr]:border-b">
                <tr
                  data-slot="table-row"
                  class="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors"
                >
                  <th
                    data-slot="table-head"
                    class="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
                  >
                    TITLE
                  </th>
                  <th
                    data-slot="table-head"
                    class="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
                  >
                    CONTENT
                  </th>
                  <th
                    data-slot="table-head"
                    class="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"
                  >
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody
                data-slot="table-body"
                class="[&amp;_tr:last-child]:border-0"
              >
                <tr
                  data-slot="table-row"
                  class="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors"
                >
                  <td
                    data-slot="table-cell"
                    class="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-center"
                    colspan="3"
                  >
                    <div class="mx-auto w-5 min-h-[50vh] flex items-center justify-center">
                      You have no posts yet.
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPost;
